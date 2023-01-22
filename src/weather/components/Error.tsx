type Props = {
code: string;
message: string;
}

const Error = ({code, message }: Props) => {
return <p>Error {code}: {message}</p>
}

export default Error;