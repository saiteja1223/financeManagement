import React, { createContext, useState } from 'react';

// Create a context for the selected entity
export const EntityContext = createContext();

export const EntityProvider = ({ children }) => {
    const [selectedEntity, setSelectedEntity] = useState(null);

    return (
        <EntityContext.Provider value={{ selectedEntity, setSelectedEntity }}>
            {children}
        </EntityContext.Provider>
    );
};
