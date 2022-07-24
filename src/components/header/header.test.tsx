import { render } from "@testing-library/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Header from "./header";

describe("Header", () => {
  it("should render successfully", () => {
    const mockSession: Session = {
      expires: "1",
      user: { email: "a", name: "Delta", image: "c" },
    };
    const { baseElement } = render(
      <SessionProvider session={mockSession}>
        <Header />
      </SessionProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
