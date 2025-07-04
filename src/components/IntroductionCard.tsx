import React from "react";
import { Anchor, Text, Title, Tooltip } from "@mantine/core";
import TitledCard from "./TitledCard";
import { tooltipProps } from "../utilities/tooltip";

function IntroductionCard() {
  const bold = (text: string) => (
    <Text span italic weight="bold">
      {text}
    </Text>
  );

  return (
    <TitledCard title="Sobre" collapsible>
      <Text>
        Esta é a versão em português brasileiro do <Anchor href="https://vedxyz.github.io/kana/">aplicativo criado por vedxyz</Anchor>. Se você tem domínio do inglês, utilize este aplicativo por lá.
        
      </Text>
      <Text>
        Caso você nunca tenha aprendido o hiragana e/ou o katakana, recomenda-se que siga pela opção "Aprendizado Estruturado" abaixo. Se quer treinar, as duas opções seguintes são mais indicadas.
      </Text>
      <Title order={4} mt="sm">
        Como usar
      </Title>
      <Text>
        O uso prático deste aplicativo de aprendizado e memorização de Kana é bem simples: após selecionar o modo de uso abaixo, um kana (ou uma palavra dependendo do modo) aparecerá e você deve digitar o som do mesmo
        em nosso alfabeto, utilizando a caixa de texto "romaji". Se estiver correto, um novo kana (ou palavra) aparecerá na sequência. Se estiver errado, você tenta novamente até acertar.
      </Text>
    </TitledCard>
  );
}

export default IntroductionCard;
