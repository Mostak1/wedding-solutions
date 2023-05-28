-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 08:51 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electro_master`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(50) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `home` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` set('1','2','3','4') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `city`, `state`, `postal_code`, `home`, `phone`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Ishrat', 'zahan', 'Dhaka', 'Mirpur 6', '1216', 'Shenara,314/7', '0179999', 'ishrat@gmail.com', '12345', '2', '2023-02-18 13:36:50'),
(5, 'arif', 'hossain', 'dhaka', 'mirpur', '1216', 'Shenara,314/7', '01819999', 'arif@gmail.com', '$2y$10$TwryUgChI0iIbxkpwggLF./C/yI5DoK5N3lKxCklfl481CHEP652K', '2', '2023-03-02 21:14:30'),
(6, 'sadia', 'rahman', 'dhaka', 'gulshan', '1216', 'Shenara,314/7', '0178888', 'sadia@gmail.com', '$2y$10$277EBt86yakM0d8bU1b9Y.krC4dxqe.yJ6JVb30Ylj2Tuw.DqaFDi', '1', '2023-03-03 01:44:15'),
(7, 'user1', 'user1', 'Dhaka', 'Dhaka', '1216', 'Shenara,314/7', '01835648526', 'user1@gmail.com', '$2y$10$fDWN4tUrLjq08AxevR6xieVgKdacHW3ZcyPJZ7Y0nIAA23XMZQyBy', '2', '2023-03-06 23:41:37'),
(10, 'Mostak', '', '', '', '', 'Mirpur', '01254553155', 'test1@gmail.com', '123456', '', '2023-05-22 00:25:37'),
(11, 'Mostak', '', '', '', '', 'Mirpur', '01254553155', 'test1@gmail.com', '$2y$10$AnWBHbGm0VrrpLBdTZf8PuUayWbFdpOqMGdjiC0eFlZKYBOmYr7kC', '', '2023-05-22 00:29:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
