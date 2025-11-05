import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ArrowLeft, MapPin} from "lucide-react";
import {Label} from "@radix-ui/react-label";
import {Button} from "@/components/ui/button.tsx";

export function SearchedCepCard() {
    return (
        <>
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle>
                        <div className="flex items-center justify-center flex-col gap-5 pt-5">
                            <MapPin size={42} stroke='#52A36B'/>
                            <h1 className="text-3xl font-bold mt-4">Endereço Encontrado</h1>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                        <div className="gap-3 flex flex-col">
                            <div className="gap-4 flex flex-col">
                                <div>
                                    <Label htmlFor="cep" className="font-semibold text-gray-500 text-lg">CEP</Label>
                                    <p className="font-semibold text-xl text-gray-800">08940--000</p>
                                </div>

                                <div>
                                    <Label htmlFor="cep" className="font-semibold text-gray-500 text-lg">Logradouro</Label>
                                    <p className="font-semibold text-xl text-gray-800">08940--000</p>
                                </div>

                                <div>
                                    <Label htmlFor="cep" className="font-semibold text-gray-500 text-lg">Bairro</Label>
                                    <p className="font-semibold text-xl text-gray-800">08940--000</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="cep" className="font-semibold text-gray-500 text-lg">Cidade</Label>
                                        <p className="font-semibold text-xl text-gray-800">08940--000</p>
                                    </div>
                                    <div>
                                        <Label htmlFor="cep" className="font-semibold text-gray-500 text-lg">UF</Label>
                                        <p className="font-semibold text-xl text-gray-800">08940--000</p>
                                    </div>
                                </div>

                            </div>
                            <div className=" flex flex-col justify-center items-center w-full mt-5">
                                <Button size="lg" variant="outline" className="w-sm cursor-pointer text-lg"> <ArrowLeft/>Buscar outro CEP </Button>
                            </div>
                        </div>

                </CardContent>
            </Card>
        </>
    )
}