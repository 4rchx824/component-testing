"use client";
import { Alert } from "@/components/pkg/alert";
// import { Input } from "@/components/pkg/input";

// import { Input } from "@4rchx824/ui/input";
import { Textarea } from "@/components/pkg/textarea";
// import { Textarea } from "@/components/ui/textarea";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-start min-h-[100dvh]">
            <div className="w-full p-4 flex flex-col space-y-8">
                {/* <Alert dismissible onDismiss={() => alert("Dismissed!")}>
                    <h1>Hello World</h1>
                </Alert> */}
                {/* <Input type="password" variant={"lg"} /> */}
                <Textarea autosize={true} onChange={() => alert("H")} />
            </div>
        </main>
    );
}
