import React from "react";

export interface CodeToken {
    text: string;
    color?: string;
}

export interface CodeLine {
    tokens: CodeToken[];
}

interface CodeWindowProps {
    filename?: string;
    lines: CodeLine[];
    className?: string;
}

export const CodeWindow: React.FC<CodeWindowProps> = ({
    filename = "component.tsx",
    lines,
    className = "",
}) => {
    return (
        <div
            className={`rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 ${className}`}
        >
            {/* Title bar */}
            <div className="bg-[#161B22] border-b border-white/10 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-white/40 font-mono ml-2">{filename}</span>
            </div>

            {/* Code body */}
            <div className="bg-[#0D1117] p-4 overflow-x-auto">
                <table className="w-full border-collapse">
                    <tbody>
                        {lines.map((line, lineIndex) => (
                            <tr key={lineIndex} className="leading-7">
                                <td className="text-white/20 text-right pr-5 select-none text-xs font-mono w-8 align-top pt-0.5">
                                    {lineIndex + 1}
                                </td>
                                <td className="font-mono text-sm">
                                    {line.tokens.length === 0 ? (
                                        <span>&nbsp;</span>
                                    ) : (
                                        line.tokens.map((token, tokenIndex) => (
                                            <span
                                                key={tokenIndex}
                                                className={token.color ?? "text-white/80"}
                                            >
                                                {token.text}
                                            </span>
                                        ))
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
