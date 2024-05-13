import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="150px" />
      <CardBody>
        <Skeleton height="100px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
