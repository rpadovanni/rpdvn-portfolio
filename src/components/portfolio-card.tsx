import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const PortfolioCard = ({ title, description, technologies, imageUrl }: Props) => {
  return (
    <div className="flex h-full">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent className="">
          <CardDescription>{description}</CardDescription>
          {technologies.map((technology, index) => (
            <Badge key={index}>{technology}</Badge>
          ))}
        </CardContent>

        <CardFooter
          className="h-10 rounded-b-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </Card>
    </div>
  );
};

export default PortfolioCard;
