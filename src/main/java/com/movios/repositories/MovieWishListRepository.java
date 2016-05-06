package com.movios.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.movios.models.MovieWishListModel;

public interface MovieWishListRepository extends JpaRepository<MovieWishListModel, Long> {

}
