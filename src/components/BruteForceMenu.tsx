import { Button, ButtonProps, Container, Group, List, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { KanaNames } from "../utilities/kana";
import BruteForcePractice from "./BruteForcePractice";

function BruteForceMenu() {
  const buttonProps: ButtonProps = {
    variant: "light",
    fullWidth: true,
    styles: {
      label: { display: "block", textAlign: "center", padding: "0.8rem" },
      root: { height: "unset", flex: "1" },
    },
  };

  const [kanaType, setKanaType] = useState<KanaNames | null>(null);

  if (kanaType) return <BruteForcePractice kanaType={kanaType} />;

  return (
    <Container px={0}>
      <Text>
        Neste modo você passará por estágios que te introduzirão um grupo de kana por vez. A resposta para novos kana aparecerá
        automaticamente, por isso foque na forma do kana. Após cada um desses estágios, haverá um momento para revisão do que já aprendeu. 
        Após cumprir os requerimentos você passará para o próximo estágio.
      </Text>
      <Title order={4} mt="sm">
        Dicas
      </Title>
      <List pr={16}>
        <List.Item>
          Não sinta-se pressionado para seguir para o próximo estágio imediatamente quando oferecido, reflita se está preparado.
        </List.Item>
        <List.Item>Você pode acabar notando que este aplicativo não salvar seu progresso, mas não se preocupe: você pode continuar 
        de qualquer coluna antes de recomeçar a estudar.</List.Item>
        <List.Item>Em média, são necessárias 1.600 respostas corretas para terminar todos os estágios.</List.Item>
        <List.Item>
          Aprender os kana aqui não necessariamente significa que você será capaz de reproduzí-los. A única garantia é 
          que você se tornará capaz de reconhecê-los quando vê-los, o que é o suficiente para a maioria das pessoas.
        </List.Item>
      </List>
      <Text mt="sm">
        Recomenda-se que aprenda {" "}
        <Text span italic>
          hiragana
        </Text>{" "}
       primeiro.
      </Text>

      <Group mt="sm">
        <Button {...buttonProps} onClick={() => setKanaType("hiragana")}>
          <Title order={3}>Hiragana</Title>
          <Text weight="normal">ひらがな</Text>
        </Button>
        <Button {...buttonProps} onClick={() => setKanaType("katakana")}>
          <Title order={3}>Katakana</Title>
          <Text weight="normal">カタカナ</Text>
        </Button>
      </Group>
    </Container>
  );
}

export default BruteForceMenu;
