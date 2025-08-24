import NotFound from "@/components/ui/notFound";
import AppLayout from "@/layout";
import NoFiles from "../../components/ui/noFiles";

export default function Shared() {
    return (
        <AppLayout>
            {/* <NotFound /> */}
            <NoFiles />
        </AppLayout>
    )
}