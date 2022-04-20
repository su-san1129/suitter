type Props = { id: string | undefined };
export const UserId: React.VFC<Props> = ({ id }: Props) => <>@{id?.split('-').shift()}</>;
