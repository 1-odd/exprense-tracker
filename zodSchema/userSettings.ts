import { Currencies } from '@/lib/currencies';
import zod from 'zod';
export const UpdateUserCurrencySchema = zod.object({
    currency: zod.custom(value => {
        const found = Currencies.some(c => c.value === value);
        if (!found) {
            throw new Error('Invalid currency: ' + value);
        }
        return value;
    })
})