import * as React from "react";

export const withPageTitle = <P extends object>(
  title: string,
  Component: React.ComponentType<P>
) =>
  class WithPageTitle extends React.Component<P> {
    componentDidMount() {
      document!.head!.querySelector("title")!.innerText = title;
    }

    render() {
      return <Component {...this.props} />;
    }
  };
