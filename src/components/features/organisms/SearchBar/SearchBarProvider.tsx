import { useProfilesService } from '@service/profiles';
import { createProvider } from '@shared/react/createProvider';
import { useState, useCallback } from 'react';

const useValue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { searchProfiles, loading, error, data } = useProfilesService();
  const PAGE_SIZE = 10;

  const handleSearch = useCallback(async () => {
    await searchProfiles({
      first: PAGE_SIZE,
      searchTerm: searchTerm.trim(),
    });
  }, [searchProfiles, searchTerm]);

  const handleNextPage = useCallback(async () => {
    if (data?.pageInfo.hasNextPage && data?.pageInfo.endCursor) {
      await searchProfiles({
        first: PAGE_SIZE,
        after: data.pageInfo.endCursor,
        searchTerm: searchTerm.trim(),
      });
      setCurrentPage(prev => prev + 1);
    }
  }, [data, searchProfiles, searchTerm]);

  const handlePrevPage = useCallback(async () => {
    if (data?.pageInfo.hasPreviousPage && data?.pageInfo.startCursor) {
      await searchProfiles({
        last: PAGE_SIZE,
        before: data.pageInfo.startCursor,
        searchTerm: searchTerm.trim(),
      });
      setCurrentPage(prev => prev - 1);
    }
  }, [data, searchProfiles, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    loading,
    error,
    data,
    currentPage,
    handleNextPage,
    handlePrevPage,
  };
};

useValue.__PROVIDER__ = 'src/components/features/organisms/SearchBar/SearchBarProvider.tsx';

export const { Provider: SearchBarProvider, useContext: useSearchBarContext } = createProvider(useValue);