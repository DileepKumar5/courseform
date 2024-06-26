import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardWrapper {
    children: React.ReactNode,
    title: string
}

const CardWrapper = ({children,title}:CardWrapper) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-center text-4xl">{title}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                {children}
            </CardContent>
        </Card>

    )
}

export default CardWrapper
