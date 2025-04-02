import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmView from "./view";
import { BrowserRouter } from "react-router-dom";

describe("<ConfirmView />", () => {
  it("renders ID card field with id", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );
    expect(getByTestId("outlined-id-card")).toBeInTheDocument();
  });

  it("renders lastname field with id", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );
    expect(getByTestId("outlined-lastname")).toBeInTheDocument();
  });

  it("renders lastname field with id", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );
    expect(getByTestId("outlined-name")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );
    expect(getByTestId("submit-button")).toBeInTheDocument();
  });

  it("renders name when input", async () => {
    render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );

    const idCardField = screen
      .getByTestId("outlined-name")
      .querySelector("input") as HTMLInputElement;

    expect(idCardField).toBeInTheDocument();

    await userEvent.type(idCardField, "theng");
    expect(idCardField).toHaveValue("theng");
  });

  it("renders lastname when input", async () => {
    render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );

    const idCardField = screen
      .getByTestId("outlined-lastname")
      .querySelector("input") as HTMLInputElement;

    expect(idCardField).toBeInTheDocument();

    await userEvent.type(idCardField, "theng");
    expect(idCardField).toHaveValue("theng");
  });

  it("renders ID card when input", async () => {
    render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );

    const idCardField = screen
      .getByTestId("outlined-id-card")
      .querySelector("input") as HTMLInputElement;

    expect(idCardField).toBeInTheDocument();

    await userEvent.type(idCardField, "1234567890123");
    expect(idCardField).toHaveValue("1234567890123");
  });

  it("show error text id card when submit", async () => {
    render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );

    const idCardField = screen
      .getByTestId("outlined-id-card")
      .querySelector("input") as HTMLInputElement;

    await userEvent.type(idCardField, "abcdefghij");

    const submitButton = screen.getByTestId("submit-button");
    await userEvent.click(submitButton);

    expect(
      screen.getByText("หมายเลขบัตรประชาชน ต้องเป็นตัวเลขเท่านั้น")
    ).toBeInTheDocument();
  });

  it("show error text account no when submit", async () => {
    render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );

    const idCardField = screen
      .getByTestId("outlined-account-no")
      .querySelector("input") as HTMLInputElement;

    await userEvent.type(idCardField, "rjngragafnralf");

    const submitButton = screen.getByTestId("submit-button");
    await userEvent.click(submitButton);

    expect(
      screen.getByText("หมายเลขบัญชี ต้องเป็นตัวเลขเท่านั้น")
    ).toBeInTheDocument();
  });

  it("show error text input file when submit", async () => {
    render(
      <BrowserRouter>
        <ConfirmView />
      </BrowserRouter>
    );

    const submitButton = screen.getByTestId("submit-button");
    await userEvent.click(submitButton);

    expect(screen.getByText("กรูณาอัปโหลดไฟล์")).toBeInTheDocument();
  });
});
