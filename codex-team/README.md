# Codex Team - 自動コード生成・レビューシステム

## 概要

Figma MCPから取得したデザインを、役割分担された5つのbotが協力してHTML+SCSSに変換するシステムです。

## 部隊構成

### 🟢 Structure Designer - HTML構造設計
- Figma JSONとスクリーンショットを解析し、HTML構造とclass命名だけを生成
- HTMLファイルのみ出力（SCSSなし）

### 🟣 Style Generator - SCSSスタイラー
- structure-designerのHTMLをもとに、BEM準拠SCSSを生成
- SCSSファイルのみ出力

### 🔵 HTML Reviewer - HTMLチェッカー
- 構文・セマンティクス・アクセシビリティをチェック
- 修正JSONを出力

### 🟠 SCSS Reviewer - SCSSチェッカー
- BEM・rem・lintルール検証
- 修正JSONを出力

### 🟡 QA Checker - 品質チェッカー
- alt/link/ariaなど非機能品質チェック
- レポートを出力

## 起動方法

### 前提条件

1. **tmuxがインストールされていること**
   ```bash
   # macOSの場合
   brew install tmux
   
   # インストール確認
   tmux -V
   ```

2. **実行権限が付与されていること**
   ```bash
   cd /Users/chibahiromu/案件対応/WebAnimation-course02/codex-team
   chmod +x bots/*.sh
   ```

### 起動手順

1. **プロジェクトディレクトリに移動**
   ```bash
   cd /Users/chibahiromu/案件対応/WebAnimation-course02/codex-team
   ```

2. **orchestrator.shを実行**
   ```bash
   bash bots/orchestrator.sh
   ```
   または
   ```bash
   ./bots/orchestrator.sh
   ```

3. **tmuxセッションが起動**
   - 5つのbotがそれぞれ別ウィンドウで起動
   - ログ監視用ウィンドウも起動

### tmux操作

#### ウィンドウ切り替え
- `Ctrl+B` → `0` ~ `6`: ウィンドウ番号で切り替え
- `Ctrl+B` → `n`: 次のウィンドウ
- `Ctrl+B` → `p`: 前のウィンドウ

#### ウィンドウ一覧
- `Ctrl+B` → `w`: ウィンドウ一覧を表示

#### セッションをデタッチ
- `Ctrl+B` → `d`: セッションをデタッチ（バックグラウンドで実行継続）

#### セッションに再アタッチ
```bash
tmux attach-session -t codex-team
```

#### セッションを終了
```bash
# セッション内で
exit

# または外部から
tmux kill-session -t codex-team
```

## ディレクトリ構造

```
codex-team/
├── bots/              # 各botのシェルスクリプト
│   ├── orchestrator.sh
│   ├── structure-designer.sh
│   ├── style-generator.sh
│   ├── html-reviewer.sh
│   ├── scss-reviewer.sh
│   └── qa-checker.sh
├── prompts/           # 各botのプロンプト
│   ├── structure-designer.md
│   ├── style-generator.md
│   ├── html-reviewer.md
│   ├── scss-reviewer.md
│   └── qa-checker.md
└── logs/              # ログファイル
    ├── structure-designer.log
    ├── style-generator.log
    ├── html-reviewer.log
    ├── scss-reviewer.log
    └── qa-checker.log
```

## ワークフロー

1. **Structure Designer**がFigma JSONを解析し、HTML構造を生成
2. **HTML Reviewer**がHTMLをレビューし、修正JSONを出力
3. **Structure Designer**が修正JSONを適用し、HTMLを再生成
4. 修正が完了するまで（`status: "ok"`になるまで）繰り返す
5. **Style Generator**がHTMLをもとにSCSSを生成
6. **SCSS Reviewer**がSCSSをレビューし、修正JSONを出力
7. **Style Generator**が修正JSONを適用し、SCSSを再生成
8. 修正が完了するまで（`status: "ok"`になるまで）繰り返す
9. **QA Checker**が最終品質チェックを行い、レポートを出力

## 修正ループ

各botは修正事項がなくなるまで自動的に修正と再レビューを繰り返します：

- **HTML Reviewer**: 最大10回まで繰り返し
- **SCSS Reviewer**: 最大10回まで繰り返し
- **QA Checker**: 最大5回まで繰り返し

## トラブルシューティング

### tmuxが見つからない
```bash
# macOS
brew install tmux

# Linux (Ubuntu/Debian)
sudo apt-get install tmux
```

### 実行権限がない
```bash
chmod +x bots/*.sh
```

### セッションが既に存在する
```bash
# 既存のセッションを削除
tmux kill-session -t codex-team

# 再度起動
bash bots/orchestrator.sh
```

### ログを確認したい
```bash
# 個別のログを確認
tail -f logs/structure-designer.log
tail -f logs/html-reviewer.log

# すべてのログを確認
tail -f logs/*.log
```

## 注意事項

- 各botは現在、基本的なシェルスクリプトのテンプレートです
- 実際のAI処理を実装する必要があります
- ログファイルは`logs/`ディレクトリに自動生成されます

