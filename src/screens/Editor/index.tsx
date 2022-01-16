import HeaderEditor from '@/components/HeaderEditor';
import Layout from '@/components/Layout';
import NotoEditor from '@/components/NotoEditor';
import { Colors } from '@/styles';
import React from 'react';

const EditorScreen = () => {
    return (
		<Layout headerColor={Colors.HEADER}>
			<HeaderEditor />
            <NotoEditor />
        </Layout>
    );
};

export default EditorScreen;
