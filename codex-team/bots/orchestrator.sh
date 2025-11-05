#!/bin/bash

# Codex Team Orchestrator
# 新しい部隊構成に合わせたオーケストレーター

# 新しい tmux セッションを作成
SESSION="codex-team"
tmux new-session -d -s $SESSION

# 各エージェントを別ウィンドウで起動
# 🟢 HTML構造設計
tmux new-window -t $SESSION:1 -n 'Structure' 'bash bots/structure-designer.sh'

# 🟣 SCSSスタイラー
tmux new-window -t $SESSION:2 -n 'Style' 'bash bots/style-generator.sh'

# 🔵 HTMLチェッカー
tmux new-window -t $SESSION:3 -n 'HTML-Review' 'bash bots/html-reviewer.sh'

# 🟠 SCSSチェッカー
tmux new-window -t $SESSION:4 -n 'SCSS-Review' 'bash bots/scss-reviewer.sh'

# 🟡 QAチェッカー
tmux new-window -t $SESSION:5 -n 'QA' 'bash bots/qa-checker.sh'

# ログ監視用
tmux new-window -t $SESSION:6 -n 'Monitor' 'tail -f logs/*.log'

# 最後にセッションをアタッチ
tmux attach-session -t $SESSION

