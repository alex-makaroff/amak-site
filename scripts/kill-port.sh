#!/usr/bin/env bash
# Kill process on specified port
# Usage: ./scripts/kill-port.sh [port_number]

PORT=$1

if [ -z "$PORT" ]; then
  echo "Usage: $0 [port_number]"
  exit 1
fi

echo "Searching for process on port $PORT..."

PIDS=$(lsof -ti:"$PORT" 2>/dev/null)

if [ -z "$PIDS" ]; then
  echo "No process found on port $PORT"
  exit 0
fi

for PID in $PIDS; do
  echo "Found process PID: $PID"
  kill -9 "$PID" 2>/dev/null && echo "Process $PID on port $PORT killed" || echo "Failed to kill process $PID"
done
