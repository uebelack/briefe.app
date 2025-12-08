import { NextResponse } from "next/server";
import middleware from "../middleware";

// Mock NextResponse
jest.mock("next/server", () => ({
  NextResponse: {
    redirect: jest.fn((url) => ({ url })),
    next: jest.fn(() => ({ next: true })),
  },
}));

describe("Middleware", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Root path redirection", () => {
    it("should redirect to English by default when no accept-language header", () => {
      const request = {
        nextUrl: { pathname: "/" },
        headers: { get: () => null },
        url: "https://briefe.app",
      };

      middleware(request);
      expect(NextResponse.redirect).toHaveBeenCalledWith(
        new URL("/en", "https://briefe.app")
      );
    });

    it("should redirect to German when accept-language is de", () => {
      const request = {
        nextUrl: { pathname: "/" },
        headers: { get: () => "de,en-US;q=0.9,en;q=0.8" },
        url: "https://briefe.app",
      };

      middleware(request);
      expect(NextResponse.redirect).toHaveBeenCalledWith(
        new URL("/de", "https://briefe.app")
      );
    });
  });

  describe("Backward links redirection", () => {
    it("should redirect /help to /en/help", () => {
      const request = {
        nextUrl: { pathname: "/help" },
        url: "https://briefe.app",
      };

      middleware(request);
      expect(NextResponse.redirect).toHaveBeenCalledWith(
        new URL("/en/help", "https://briefe.app")
      );
    });

    it("should redirect /privacy to /en/privacy", () => {
      const request = {
        nextUrl: { pathname: "/privacy" },
        url: "https://briefe.app",
      };

      middleware(request);
      expect(NextResponse.redirect).toHaveBeenCalledWith(
        new URL("/en/privacy", "https://briefe.app")
      );
    });
  });

  describe("Localhost handling", () => {
    it("should pass through requests on localhost", () => {
      const request = {
        nextUrl: { pathname: "/de/test" },
        url: "http://localhost:3000",
      };

      middleware(request);
      expect(NextResponse.next).toHaveBeenCalled();
    });
  });

  describe("Domain-specific redirections", () => {
    it("should redirect non-briefe.app domains with /de path to briefe.app", () => {
      const request = {
        nextUrl: { pathname: "/de/test" },
        url: "https://letter-app.com",
      };

      middleware(request);
      expect(NextResponse.redirect).toHaveBeenCalledWith(
        new URL("/de/test", "https://briefe.app")
      );
    });

    it("should redirect briefe.app domains with non-/de path to letter-app.com", () => {
      const request = {
        nextUrl: { pathname: "/en/test" },
        url: "https://briefe.app",
      };

      middleware(request);
      expect(NextResponse.redirect).toHaveBeenCalledWith(
        new URL("/en/test", "https://letter-app.com")
      );
    });

    it("should not redirect briefe.app domains with /de path", () => {
      const request = {
        nextUrl: { pathname: "/de/test" },
        url: "https://briefe.app",
      };

      middleware(request);
      expect(NextResponse.next).toHaveBeenCalled();
    });
  });
});
