import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import { leadCertificationOptions } from "../../../lib/launch-data";

export const runtime = "nodejs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const storagePath = path.join(process.cwd(), "data", "prelaunch-leads.ndjson");

type LeadPayload = {
  certification_interest: string | null;
  created_at: string;
  email: string;
  origin: "landing_pre_launch";
};

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

async function persistLead(lead: LeadPayload) {
  // TODO: substituir esta persistencia local por um repository conectado ao AWS RDS.
  await mkdir(path.dirname(storagePath), { recursive: true });
  await appendFile(storagePath, `${JSON.stringify(lead)}\n`, "utf8");
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!body) {
    return NextResponse.json(
      { message: "Nao foi possivel ler os dados enviados." },
      { status: 400 },
    );
  }

  const email = sanitizeText(body.email, 160).toLowerCase();
  const origin = sanitizeText(body.origin, 64);
  const certificationInterest = sanitizeText(body.certification_interest, 80);

  if (!email) {
    return NextResponse.json(
      { message: "Informe um email para entrar na lista." },
      { status: 400 },
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Informe um email valido." },
      { status: 400 },
    );
  }

  if (origin !== "landing_pre_launch") {
    return NextResponse.json(
      { message: "Origem do lead invalida." },
      { status: 400 },
    );
  }

  if (
    certificationInterest &&
    !leadCertificationOptions.some((option) => option.value === certificationInterest)
  ) {
    return NextResponse.json(
      { message: "Certificacao selecionada invalida." },
      { status: 400 },
    );
  }

  const lead: LeadPayload = {
    certification_interest: certificationInterest || null,
    created_at: new Date().toISOString(),
    email,
    origin: "landing_pre_launch",
  };

  await persistLead(lead);

  return NextResponse.json(
    {
      message:
        "Cadastro recebido. Voce entrou na lista de espera da CloudStudy.",
    },
    { status: 201 },
  );
}
