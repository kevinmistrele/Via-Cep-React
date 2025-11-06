export function isValidCep(cep: string): boolean {
    const cleanedCep = cep.replace(/\D/g, '');
    if (cleanedCep.length !== 8) {
        return false;
    }

    const cepRegex = /^\d{8}$/;
    return cepRegex.test(cleanedCep);
}