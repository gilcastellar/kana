import React from "react";
import { Anchor, List, Text } from "@mantine/core";
import TitledCard from "./TitledCard";
import { IconArrowNarrowRight } from "@tabler/icons-react";

function ExplanationCard() {
  const RightArrow = <IconArrowNarrowRight style={{ verticalAlign: "middle" }} />;

  return (
    <TitledCard title="Detalhes" titleOrder={3} collapsible>
      <div
        dangerouslySetInnerHTML={{ __html: "<!-- This information was taken/paraphrased from the DJT kana page. -->" }}
      />
      <Text>
        Alguns kana podem receber dois &quot;risquinhos&quot;, levemente parecidos com nossas aspas, o {" "}
        <Anchor href="https://pt.wikipedia.org/wiki/Dakuten_e_Handakuten" italic>
          dakuten
        </Anchor>
        , à frente. Isso indica uma alteração no som que o kana produz. Veja abaixo como essas mudanças se comportam:
      </Text>
      <List sx={{ display: "flex", flexWrap: "wrap", columnGap: "2.5rem" }}>
        <List.Item>k {RightArrow} g</List.Item>
        <List.Item>t {RightArrow} d</List.Item>
        <List.Item>h/f {RightArrow} b</List.Item>
        <List.Item>s/ts {RightArrow} z</List.Item>
        <List.Item>sh/ch {RightArrow} j</List.Item>
      </List>
      <Text>
        Também é possível que alguns kana recebam uma bolinha, o {" "}
        <Anchor href="https://pt.wikipedia.org/wiki/Dakuten_e_Handakuten" italic>
          handakuten
        </Anchor>
        , à frente. Mais especificamente tornando os kana da coluna H em P. Por xemplo: Ho se torna Po.
      </Text>
      <Text mt="sm">
        Os pequenos kana (ゅ, ょ, ゃ, ...) são usados para combinar sons. por exemplo, em ぎゃ, a consoante de ぎ
        (gi) combina com o som de や (ya), formando o som &quot;gya&quot; O pequeno っ (menor que o つ/tsu) não é pronunciado,
        mas apenas estende a consoante seguinte, como em にっぽん (ni
        <Text span weight={700}>
          pp
        </Text>
        on).
      </Text>
    </TitledCard>
  );
}

export default ExplanationCard;
