import { useState } from "react";
import axios from "axios";
import "./styles.css";

interface CepProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export default function ZipcodeSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<null | CepProps>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getZipcodeData = async () => {
    if (search === "") return;
    setError(false);
    setLoading(true);
    setData(null);

    await axios
      .get(`https://viacep.com.br/ws/${search}/json`)
      .then((response) => {
        if (response.data.erro === true) return setError(true);
        setData(response.data);
      })
      .catch((error) => {
        setError(true);
      });

    setLoading(false);
  };

  const buttonText = loading ? "Buscando..." : "Buscar";

  return (
    <>
      <h1>Buscador de CEP</h1>

      <div>
        <input
          type="text"
          className="inp-search"
          placeholder="Insira o CEP a ser buscado"
          value={search}
          onKeyDown={(event) => event.key === "Enter" && getZipcodeData()}
          onChange={(e) => setSearch(e.target.value.replace(/[^0-9-]/g, ""))}
          disabled={loading}
          data-testid="search-input"
        />

        <button
          className="btn-search"
          onClick={() => getZipcodeData()}
          disabled={loading}
          data-testid="search-button"
        >
          {buttonText}
        </button>
      </div>

      {data && (
        <div data-testid="zipcode-content">
          <h2>Dados do CEP {data.cep}</h2>
          <hr />
          <h3>Bairro: {data.bairro}</h3>
          <h3>Logradouro: {data.logradouro}</h3>
          <h3>DDD: {data.ddd}</h3>
          <h3>Estado: {data.localidade}</h3>
          <h3>Cidade: {data.uf}</h3>
        </div>
      )}

      {error && <h2 className="error-search">CEP não encontrado.</h2>}
    </>
  );
}
