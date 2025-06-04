

import { Typography } from "@mui/material"
import { motion } from "framer-motion"

interface BioProps {
    dictionary: any
}

export default function Bio({ dictionary }: BioProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem" }}>
                {dictionary.about.bio1}
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem" }}>
                {dictionary.about.bio2}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem" }}>
                {dictionary.about.bio3}
            </Typography>
        </motion.div>
    )
}
