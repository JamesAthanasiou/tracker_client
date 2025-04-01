import { Alert, AlertTitle } from "@mui/material";

type ErrorMessageProps = {
  error?: string;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <Alert severity="error" className="flex items-center gap-2 p-4 rounded-lg">
      <div>
        <AlertTitle>Error</AlertTitle>
        <p>{error}</p>
      </div>
    </Alert>
  );
}
