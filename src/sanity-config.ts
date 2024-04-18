import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import schemas from "@/sanity/schemas"

const config = defineConfig({
    projectId: 'of5r9k1p',
    dataset: 'production',
    title: "My Personal Website",
    apiVersion: "2024-04-04",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas },
    useCdn: false
})

export default config