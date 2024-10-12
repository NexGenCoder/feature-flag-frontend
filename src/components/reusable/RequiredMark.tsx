import { Flex, Typography } from "antd";
const { Text } = Typography;

export default function RequiredMark(
  label: React.ReactNode,
  { required }: { required: boolean },
): React.ReactNode {
  return (
    <Flex gap={4}>
      {label}
      {required ? <Text style={{ color: "red" }}>*</Text> : null}
    </Flex>
  );
}
