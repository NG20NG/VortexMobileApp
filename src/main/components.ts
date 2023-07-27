//
//
//
//
//
//
//
//
export const SplitText = (e: string, limit: number) => {
  return (
    (e.slice(0, limit)[limit - 1] == " "
      ? e.slice(0, limit - 1)
      : e.slice(0, limit)) + "..."
  );
};
