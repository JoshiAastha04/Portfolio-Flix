import React from "react";

export default function TestRow() {
    const boxes = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className="w-screen bg-black text-white py-8">
            <h2 className="px-4 mb-3 text-lg font-bold">Debug Row (Test)</h2>

            <div
                className="
                    flex
                    gap-4
                    overflow-x-auto
                    overflow-y-hidden
                    px-4
                    pb-3
                "
                style={{
                    WebkitOverflowScrolling: "touch",
                    touchAction: "pan-x",      // 📱 force horizontal gestures
                }}
            >
                {boxes.map((n) => (
                    <div
                        key={n}
                        className="
                            flex-none
                            w-[70vw]
                            sm:w-64
                            h-40
                            rounded-2xl
                            bg-red-600
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-bold
                        "
                    >
                        {n}
                    </div>
                ))}
            </div>
        </div>
    );
}
