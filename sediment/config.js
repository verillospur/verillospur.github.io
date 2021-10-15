const get_config_obj = 
    () => {
            const config = {
                things: 101,
                defaults: {
                    atom_width: 1,
                    atom_height: 1,
                    atom_depth: 1,
                    atom_x: 0,
                    atom_y: 0,
                    atom_z: 0,
                    atom_id: -1,
                }
            };
            return config;
};

module.exports = get_config_obj();