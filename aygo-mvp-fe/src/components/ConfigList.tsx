import React, { useEffect, useState } from "react";
import { getConfigs, deleteConfig, Config } from "../services/configService";

const ConfigList: React.FC = () => {
    const [configs, setConfigs] = useState<Config[]>([]);

    useEffect(() => {
        fetchConfigs();
    }, []);

    const fetchConfigs = async () => {
        const { data } = await getConfigs();
        setConfigs(data);
    };

    const handleDelete = async (id: number) => {
        await deleteConfig(id);
        fetchConfigs();
    };

    return (
        <div>
            <h2>Configuraciones</h2>
            <ul>
                {configs.map((config) => (
                    <li key={config.ID}>
                        {config.Key}: {config.Value}{' '}
                        <button onClick={() => handleDelete(config.ID)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConfigList;
