import type { Issue } from "../issues";

type TableProps = {
  issues: Issue[];
};

export const Table = ({ issues }: TableProps) => {
  return (
    <>
      {issues.map((issue) => (
        <p>{issue.message}</p>
      ))}
    </>
  );
};
