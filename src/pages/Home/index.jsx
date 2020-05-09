import React from 'react';
import DadosSobreCorona from '../../containers/DadosSobreCorona';
import { getDadosPorPais } from '../../resources/dadosCorona';

export default function Home() {
  return <DadosSobreCorona getDadosPorPais={getDadosPorPais} />;
}
