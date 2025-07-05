import React from "react";
import { Button, ButtonProps, Container, Text, Title } from "@mantine/core";
import { PracticeCardPages } from "./PracticeCard";

export interface PracticeMenuProps {
  onPageChange: (newPage: PracticeCardPages) => void;
}

function PracticeMenu({ onPageChange }: PracticeMenuProps) {
  const buttonProps: ButtonProps = {
    variant: "light",
    fullWidth: true,
    styles: {
      label: { display: "block", textAlign: "center", padding: "0.8rem", whiteSpace: "normal" },
      root: { height: "unset" },
    },
  };

  return (
    <Container px={0}>
      <Button {...buttonProps} onClick={() => onPageChange("bruteforce")}>
        <Title order={3}>Aprendizado estruturado</Title>
        <Text weight="normal">Siga uma sequência estruturada para aprender os kana do zero, uma coluna por vez</Text>
      </Button>
      <Button {...buttonProps} mt="sm" onClick={() => onPageChange("free")}>
        <Title order={3}>Modo livre</Title>
        <Text weight="normal">Configure e pratique da maneira que preferir</Text>
      </Button>
      <Button {...buttonProps} mt="sm" onClick={() => onPageChange("word")}>
        <Title order={3}>Modo com palavras</Title>
        <Text weight="normal">Pratique kana por meio de palavras básicas do japonês</Text>
      </Button>
    </Container>
  );
}

export default PracticeMenu;
