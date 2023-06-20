import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../views/Counter/Index";

// Descrição do grupo de testes
describe("Teste de contador", () => {
  // Função para teste
  it("Deve iniciar o contador com 0", async () => {
    // Renderiza o componente para rodar os testes
    render(<Counter />);
    await new Promise(process.nextTick);
    const counterTitle = screen.getByText("0");
    // Procura pelo texto e retorna o elemento, caso não encontre os testes param

    const counterTitle2 = screen.queryByText("0");
    // Procura pelo texto e retorna o elemento, caso não encontre o retorno é nulo e os teste continuam

    const counterTitle3 = await screen.findByText("0");
    // Procura pelo texto e retorna uma promise

    // Checa se o valor está no documento.
    expect(counterTitle).toBeInTheDocument();
    expect(counterTitle2).toBeInTheDocument();
    expect(counterTitle3).toBeInTheDocument();
  });

  it("Checa se o label inicialmente é branco", () => {
    render(<Counter />);

    const count = screen.getByTestId("count");

    expect(count).toHaveStyle("color: white;");
  });

  it("Checar se o input + existe e fica verde apos incremento", () => {
    render(<Counter />);

    const count = screen.getByTestId("count");
    const incrementButton = screen.getByTestId("button-increment");

    expect(incrementButton).toBeInTheDocument();

    expect(count).not.toHaveStyle("color: green;");

    fireEvent.click(incrementButton);

    expect(count).toHaveStyle("color: green;");
  });

  it("Checar se o input - existe e fica vermelho apos decremento", () => {
    render(<Counter />);

    const count = screen.getByTestId("count");
    const decrementButton = screen.getByTestId("button-decrement");

    expect(decrementButton).toBeInTheDocument();

    expect(count).not.toHaveStyle("color: tomato;");

    fireEvent.click(decrementButton);

    expect(count).toHaveStyle("color: tomato;");
  });
});
