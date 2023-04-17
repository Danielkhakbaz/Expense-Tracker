type Props = {
  providers: Array<React.JSXElementConstructor<React.PropsWithChildren>>;
  children: React.ReactNode;
};

export const Compose = ({ providers, children }: Props) => {
  return (
    <>
      {providers.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default Compose;
