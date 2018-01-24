import { createAction } from 'typesafe-actions';

export const filesActions = {
    addFile: createAction('ADD_FILE', (filename: string) => ({
        type: 'ADD_FILE',
        payload: filename,
    })),
};
