Commit all pending changes and push them to the remote repository.

Follow these steps exactly:

1. Run `git status` (no -uall flag) and `git diff` in parallel to see what has changed.

2. Analyze the staged and unstaged changes to understand what was modified — new features, fixes, refactors, etc.

3. Stage every modified and untracked file that belongs to the project source (never stage .env files, credentials, or secrets). Prefer adding specific files by name.

4. Build a concise commit message following the repo's conventional-commits style (`feat:`, `fix:`, `refactor:`, etc.). Focus on the *why*, not just the *what*. One sentence is usually enough; add a short body only when multiple independent changes need listing.

5. Commit using a HEREDOC so formatting is preserved, and always append the co-author trailer:
   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

6. Run `git push origin HEAD` to push the current branch to remote.

7. Report the resulting commit hash, branch, and push status in one short paragraph. If the push is rejected (e.g. non-fast-forward), explain why and ask the user how to proceed — never force-push without explicit instruction.
