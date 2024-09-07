import { Link2, Plus } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { useLinksByTripCode } from "../../hooks/useLinksByTripCode";

import { Button } from "../../components/button";
import { CreateLinkModal } from "./create-link-modal";

export function ImportantLinks() {
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  const { tripCode } = useParams();
  const { links, isFetching } = useLinksByTripCode(tripCode!);

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links Importantes</h2>

      {isFetching && (
        <p className="text-sm text-zinc-400">Carregando links...</p>
      )}

      {!isFetching && (
        <div className="space-y-5">
          {links.map((link) => (
            <div
              key={link.linkCode}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>

                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block truncate text-sm text-zinc-400 hover:text-zinc-200"
                >
                  {link.url}
                </a>
              </div>

              <Link2 className="size-5 shrink-0 text-zinc-400" />
            </div>
          ))}
        </div>
      )}

      <Button variant="secondary" size="full" onClick={openCreateLinkModal}>
        <Plus className="size-5" />

        <span>Cadastrar novo link</span>
      </Button>

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
      )}
    </div>
  );
}
