import { Text } from "@mantine/core";
import React from "react";
import { browserIsMobile } from "../utilities/mobile";

function KanaAnswerTooltipHint() {
  return (
    <Text c="dimmed" fz="xs" opacity={0.5}>
      {browserIsMobile ? "Toque" : "Passe o mouse sobre"} o kana para revelar a resposta
    </Text>
  );
}

export default KanaAnswerTooltipHint;
