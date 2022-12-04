import { Container, Text } from './styles';
import { TagProps } from './types';

export const Tag = ({ className, label }: TagProps) => (
  <Container className={className}>
    <Text variant="caption" tag="p">
      {label}
    </Text>
  </Container>
);
