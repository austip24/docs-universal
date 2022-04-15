import React, { createContext, useContext, useState } from "react";
import { DocumentContextType } from "../types/document";

const DocumentContext = createContext<DocumentContextType>({});

export const useDocuments = () => useContext(DocumentContext);

interface DocumentProviderProps {
	children: React.ReactNode;
}

const DocumentProvider: React.FC<DocumentProviderProps> = ({ children }) => {
	const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
	const [currentDocument, setCurrentDocument] = useState<Document>(null);

	return (
		<DocumentContext.Provider value={{ filteredDocuments }}>
			{children}
		</DocumentContext.Provider>
	);
};

export default DocumentProvider;
