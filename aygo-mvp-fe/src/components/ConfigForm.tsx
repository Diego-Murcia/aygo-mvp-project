import React, { useState } from 'react';
import { createConfig, Config } from '../services/configService';

const ConfigForm: React.FC = () => {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newConfig: Partial<Config> = { Key: key, Value: value };
        await createConfig(newConfig);
        setKey('');
        setValue('');
        alert('Configuración creada exitosamente');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Configuración</h2>
            <div>
                <label htmlFor="key">Clave:</label>
                <input
                    type="text"
                    id="key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="value">Valor:</label>
                <input
                    type="text"
                    id="value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Crear</button>
        </form>
    );
};

export default ConfigForm;
