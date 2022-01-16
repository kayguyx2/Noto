import uuid from 'react-native-uuid';

export const onGenerateId = () => {
    const newId = uuid.v4();
    return newId;
};
