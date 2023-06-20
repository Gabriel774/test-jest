import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ZipcodeSearch from "../views/ZipcodeSearch";
import axios from "axios";

describe("Testes de Busca de CEP", () => {
  it("Deve exibir o campo de busca", () => {
    render(<ZipcodeSearch />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("Deve exibir o botão de pesquisar", () => {
    render(<ZipcodeSearch />);
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });

  it("Deve preencher o input e enviar", async () => {
    render(<ZipcodeSearch />);
    const input = screen.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "03818120" } });

    expect(input).toHaveAttribute("value", "03818120");
    fireEvent.click(screen.getByTestId("search-button"));

    const searchResponse = await screen.findByTestId("zipcode-content");

    expect(searchResponse).toBeInTheDocument();
  });
});
