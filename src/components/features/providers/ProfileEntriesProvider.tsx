import { useProfileEntriesService } from "@service/profileEntries";
import { createProvider } from "@shared/react/createProvider";
import { useCallback, useState } from "react";

const useValue = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    searchProfileEntries,
    createProfileEntry,
    loading,
    createLoading,
    error,
    createError,
    data,
    fetchProfileEntry,
    fetchLoading,
    fetchError,
  } = useProfileEntriesService();
  const PAGE_SIZE = 10;

  const handleSearch = useCallback(async () => {
    await searchProfileEntries({
      first: PAGE_SIZE,
      searchTerm: searchTerm.trim(),
      status: status || undefined,
    });
  }, [searchProfileEntries, searchTerm, status]);

  const handleFetchProfileEntry = useCallback(
    async (id) => {
      console.log(id, "fetch id");
      await fetchProfileEntry({ id });
      // Refresh the list after creating a new entry
      closeModal();
      await handleSearch();
    },
    [createProfileEntry, handleSearch],
  );

  const handleNextPage = useCallback(async () => {
    if (data?.pageInfo.hasNextPage && data?.pageInfo.endCursor) {
      await searchProfileEntries({
        first: PAGE_SIZE,
        after: data.pageInfo.endCursor,
        searchTerm: searchTerm.trim(),
        status: status || undefined,
      });
      setCurrentPage((prev) => prev + 1);
    }
  }, [data, searchProfileEntries, searchTerm, status]);

  const handlePrevPage = useCallback(async () => {
    if (data?.pageInfo.hasPreviousPage && data?.pageInfo.startCursor) {
      await searchProfileEntries({
        last: PAGE_SIZE,
        before: data.pageInfo.startCursor,
        searchTerm: searchTerm.trim(),
        status: status || undefined,
      });
      setCurrentPage((prev) => prev - 1);
    }
  }, [data, searchProfileEntries, searchTerm, status]);

  const handleStatusChange = useCallback((newStatus: string) => {
    setStatus(newStatus);
  }, []);

  const handleCreateProfileEntry = useCallback(
    async ({
      linkedinUrn,
      gender,
    }: {
      linkedinUrn: string;
      gender: string;
    }) => {
      await createProfileEntry({ linkedinUrn, gender });
      // Refresh the list after creating a new entry
      closeModal();
      await handleSearch();
    },
    [createProfileEntry, handleSearch],
  );

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    status,
    handleStatusChange,
    handleSearch,
    loading,
    error,
    data,
    currentPage,
    handleNextPage,
    handlePrevPage,
    createProfileEntry: handleCreateProfileEntry,
    createLoading,
    createError,
    isModalOpen,
    openModal,
    closeModal,
    fetchLoading,
    fetchError,
    handleFetchProfileEntry,
  };
};

useValue.__PROVIDER__ =
  "src/components/features/providers/ProfileEntriesProvider.tsx";

export const {
  Provider: ProfileEntriesProvider,
  useContext: useProfileEntriesContext,
} = createProvider(useValue);
