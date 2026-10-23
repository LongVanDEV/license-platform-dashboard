# SecureVault license email (Resend)

Workers use **Resend** (HTTP) instead of raw SMTP.

## Secrets (Worker license-platform-api)

- `RESEND_API_KEY` (secret)
- `EMAIL_FROM` e.g. `SecureVault <noreply@yourdomain.com>`

## API

Generate with email:
```json
POST /v1/owner/licenses
{ "application_id": "...", "count": 1, "max_activations": 1, "email_to": "user@example.com" }
```

Or send later:
```json
POST /v1/owner/licenses/email
{ "to": "user@example.com", "keys": ["ABCD-..."], "application_name": "My App" }
```

Staff JWT required. Plaintext keys only available at generation time.

Deploy api-worker.js (v0.4.1) and re-bind secrets.
