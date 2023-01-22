import  Typography  from "@mui/material/Typography";

type Props = {
code: string;
message: string;
}

const Error = ({code, message }: Props) => {
return <Typography>Error {code}: {message}</Typography>
}

export default Error;